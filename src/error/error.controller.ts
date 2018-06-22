import { Controller, Get, HttpException, HttpStatus, Post, Delete } from '@nestjs/common';

@Controller('/')
export class ErrorController {

  @Get('v1/*')
  async getScreenings() {
    return errRes();
  }

  @Post('v1/*')
  async postScreenings() {
    return errRes();
  }

}

function errRes(direction: boolean = Math.random() >= 0.5) {
  return direction
    ? send500()
    : send400();
}

function send500() {
  throw new HttpException({
    errors: [{
      title: 'There was an internal error',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      class: 'some stuff',
    }],
  }, HttpStatus.INTERNAL_SERVER_ERROR);
}

function send400() {
  throw new HttpException({
    errors: [{
      title: 'There was an error with your request',
      status: 0,
      class: 'some stuff',
    }],
  }, HttpStatus.FORBIDDEN);
}