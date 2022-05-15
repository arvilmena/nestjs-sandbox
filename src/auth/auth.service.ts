import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {}

  register() {
    return 'I am signed up';
  }
}
