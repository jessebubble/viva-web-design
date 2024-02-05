import { prisma } from '~/db/prisma';

export async function createContact(
   name: string,
   email: string,
   company: string,
   phone: string,
   message: string
   // serviceId: number,
) {
   return prisma.contactForm.create({
      data: {
         name,
         email,
         company,
         phone,
         message,
         // serviceId,
      },
   });
}
