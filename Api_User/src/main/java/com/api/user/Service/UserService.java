package com.api.user.Service;

import com.api.user.Model.Entity.UserEntity;
import com.api.user.Model.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{

    @Autowired
    private IUserRepository userRepository;

    @Override
    public List<UserEntity> findAllUsers() {
        return (ArrayList<UserEntity>) userRepository.findAll();
    }

    @Override
    public Optional<UserEntity> findUserById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity saveUser(UserEntity user) {
        try{
            userRepository.insertUser(
                    user.getName(),
                    user.getUsername(),
                    user.getPassword(),
                    user.getEmail(),
                    user.getRole()
            );
            return user;
        }catch(Exception e){
            System.out.println("ERROR al guardar un usaurio en la API: " + e.getMessage());
            return user = new UserEntity();
        }
    }

    @Override
    public boolean deleteUserById(String id) {
        try {
            userRepository.deleteById(id);
            return true;
        }catch(Exception e){
            System.out.println("ERROR: Revise la api de Usuarios: " + e.getMessage());
            return false;
        }
    }

}
