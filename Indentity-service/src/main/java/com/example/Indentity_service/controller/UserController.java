package com.example.Indentity_service.controller;

import com.example.Indentity_service.dto.request.UserCreationRequest;
import com.example.Indentity_service.dto.request.UserUpdateRequest;
import com.example.Indentity_service.dto.response.ApiResponse;
import com.example.Indentity_service.dto.response.UserResponse;
import com.example.Indentity_service.service.UserService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    UserService userService;

    @PostMapping
    ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request) {
        ApiResponse<UserResponse> apiResponse = new ApiResponse<>();

        apiResponse.setResult(userService.createUser(request));

        return apiResponse;
    }

    @GetMapping
    List<UserResponse> getAllUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    UserResponse getUserById(@PathVariable String userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/{userId}")
    UserResponse updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request) {
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    ApiResponse<UserResponse> deleteUser(@PathVariable String userId) {
        ApiResponse<UserResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.deleteUser(userId));
        return apiResponse;
    }

}
