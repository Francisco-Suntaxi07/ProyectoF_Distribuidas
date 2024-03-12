package com.api.user.Service;

import com.api.user.Model.Entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    public List<UserEntity> findAllUsers();
    public Optional<UserEntity> findUserById(String id);
    public UserEntity saveUser(UserEntity user);
    public boolean deleteUserById(String id);

}
