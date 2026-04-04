package com.example.Indentity_service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

import lombok.Getter;

@Getter
public enum ErrorCode {
    INVALID_KEY(1001, "Sai key Enum", HttpStatus.BAD_REQUEST),
    USER_EXISTED(1002, "User Existed", HttpStatus.BAD_REQUEST),
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized Exception", HttpStatus.INTERNAL_SERVER_ERROR),
    USERNAME_INVALID(1003, "Tài khoản phải lớn hơn {min} ký tự", HttpStatus.BAD_REQUEST),
    PASSWORD_INVALID(1004, "Password phải lớn hơn {min} ký tự", HttpStatus.BAD_REQUEST),
    EMAIL_INVALID(1005, "Email phải đúng định dạng", HttpStatus.BAD_REQUEST),
    USER_NOT_EXISTED(1006, "User Not Existed", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1007, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    UNAUTHORIZED(1008, "You do not have permission", HttpStatus.FORBIDDEN),
    ;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;
}
