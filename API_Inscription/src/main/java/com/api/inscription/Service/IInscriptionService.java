package com.api.inscription.Service;

import com.api.inscription.Model.Entity.InscriptionEntity;

import java.util.List;
import java.util.Optional;

public interface IInscriptionService {

    public List<InscriptionEntity> findAllInscriptions();
    public Optional<InscriptionEntity> findInscriptionById(String id);
    public InscriptionEntity saveInscription(InscriptionEntity inscription);
    public boolean deleteInscriptionById(String id);

}
