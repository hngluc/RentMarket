package com.example.Indentity_service.service;

import com.example.Indentity_service.dto.request.UserCreationRequest;
import com.example.Indentity_service.dto.request.UserUpdateRequest;
import com.example.Indentity_service.dto.response.UserResponse;
import com.example.Indentity_service.entity.User;
import com.example.Indentity_service.exception.AppException;
import com.example.Indentity_service.exception.ErrorCode;
import com.example.Indentity_service.mapper.UserMapper;
import com.example.Indentity_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public User createUser(UserCreationRequest request) {
        if (userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXISTED);

        User user = userMapper.toUser(request);

        return userRepository.save(user);
    }

    public UserResponse updateUser(String userId, UserUpdateRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Nguoi dung khong tim thay"));

        userMapper.updateUser(user, request);

        return userMapper.toUserResponse(userRepository.save(user));
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public UserResponse getUser(String id) {
        return userMapper.toUserResponse(userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nguoi dung khong tim thay")));
    }

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }
}
