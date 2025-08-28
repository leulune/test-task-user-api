import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        username: 'alice',
        fullName: 'Alice Johnson',
        gender: 'FEMALE',
        age: 28,
        phone: '+10000000001',
        email: 'alice@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        isActive: true,
      },
      {
        username: 'bob',
        fullName: 'Bob Smith',
        gender: 'MALE',
        age: 32,
        phone: '+10000000002',
        email: 'bob@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        isActive: false,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => {
    void prisma.$disconnect();
  });
