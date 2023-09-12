package com.project.r2system.data.client.commons;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public abstract class GenericServiceImpl <T,ID extends Serializable> implements GenericServiceApi<T, ID> {
    @Override
    public T save(T entity) {
        return getDao().save(entity);
    }

    @Override
    public void delete(ID id) {
        getDao().deleteById(id);
    }

    @Override
    public T get(ID id) {
        Optional<T> object = getDao().findById(id);

        if(object.isPresent())
            return object.get();

        return null;
    }

    @Override
    public List<T> getAll() {
        List<T> returnList = new ArrayList<>();
        // para cada objeto encontrado agregue cada uno de ellos en el array
        getDao().findAll().forEach(object -> returnList.add(object));
        return returnList;
    }

    public abstract CrudRepository<T, ID> getDao();
}
