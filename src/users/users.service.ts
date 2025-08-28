import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type PagedUsers = {
  page: number;
  limit: number;
  total: number;
  items: User[];
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    page = 1,
    limit = 20,
    username?: string,
    isActive?: string,
  ): Promise<PagedUsers> {
    const where: Prisma.UserWhereInput = {};
    if (username) where.username = { contains: username, mode: 'insensitive' };
    if (typeof isActive !== 'undefined') where.isActive = isActive === 'true';

    const orderBy: Prisma.UserOrderByWithRelationInput = {
      registeredAt: 'desc',
    };

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy,
      }),
      this.prisma.user.count({ where }),
    ]);

    return { page, limit, total, items };
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
