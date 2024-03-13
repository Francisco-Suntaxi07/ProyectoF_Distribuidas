package com.api.inscription.Service;

import com.api.inscription.Model.Entity.InscriptionEntity;
import com.api.inscription.Model.Repository.IInscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InscriptionService implements IInscriptionService{

    @Autowired
    private IInscriptionRepository inscriptionRepository;

    @Override
    public List<InscriptionEntity> findAllInscriptions() {
        return (ArrayList<InscriptionEntity>) inscriptionRepository.findAll();
    }

    @Override
    public Optional<InscriptionEntity> findInscriptionById(String id) {
        return inscriptionRepository.findById(id);
    }

    @Override
    public InscriptionEntity saveInscription(InscriptionEntity inscription) {
        try{
            inscriptionRepository.insertInscription(
                    inscription.getIdCourse(),
                    inscription.getIdUser(),
                    inscription.getRegistrationDate()
            );
            return inscription;
        }catch(Exception e){
            System.out.println("ERROR al guardar una matricula en la API: " + e.getMessage());
            return inscription = new InscriptionEntity();
        }
    }

    @Override
    public boolean deleteInscriptionById(String id) {
        try {
            inscriptionRepository.deleteById(id);
            return true;
        }catch(Exception e){
            System.out.println("ERROR: Revise la api de Matriculas: " + e.getMessage());
            return false;
        }
    }
}
