package com.example.Indentity_service.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@Getter
@Setter
public class UserCreationRequest {
    private String id;
    @Size(min = 2, max = 20, message = "Tài khoản phải lớn hớn < 2 và > 20")
    private String username;

    @Size(min = 8, message = "Password phải lớn hơn 8 ký tự")
    private String password;
    private String firstName;
    private String lastName;

    @NotNull(message = "Không được để trống email")
    @Email(message = "Email phải đúng dinh dạng")
    private String email;

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
