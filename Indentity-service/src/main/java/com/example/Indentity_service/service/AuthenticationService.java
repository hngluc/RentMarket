package com.example.Indentity_service.service;

import com.example.Indentity_service.dto.request.AuthenticationRequest;
import com.example.Indentity_service.exception.AppException;
import com.example.Indentity_service.exception.ErrorCode;
import com.example.Indentity_service.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    UserRepository userRepository;

    boolean authenticated(AuthenticationRequest request) {
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        return user.getPassword().equals(request.getPassword());
    }
}
