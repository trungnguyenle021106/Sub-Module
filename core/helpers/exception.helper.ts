import { MessageCodes } from "@libs/shared/enums/messageCodes.enum";
import { BadRequestException, HttpException, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";

export class ExceptionHelper {
    static handleCaughtException(error: unknown, message: string = MessageCodes.UNEXPECTED_ERROR): never {
        if (error instanceof HttpException) throw error;
        else if (error instanceof Error) throw new InternalServerErrorException(error.message);
        else throw new InternalServerErrorException(message);
    }

    static throwBadRequest(message: string = MessageCodes.UNEXPECTED_ERROR): never {
        throw new BadRequestException(message);
    }

    static throwNotFound(message: string = MessageCodes.UNEXPECTED_ERROR): never {
        throw new NotFoundException(message);
    }

    static throwUnauthorized(message: string = MessageCodes.UNEXPECTED_ERROR): never {
        throw new UnauthorizedException(message);
    }
}