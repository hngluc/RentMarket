package com.example.product.repository;

import com.example.product.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>, JpaSpecificationExecutor<Item> {

    Page<Item> findByOwnerId(String ownerId, Pageable pageable);

    /**
     * Fetches an Item with its images and category eagerly loaded
     * to avoid N+1 queries when building the detail response.
     */
    @EntityGraph(attributePaths = {"images", "category"})
    Optional<Item> findWithImagesById(Long id);

    /**
     * Atomically increments the view count for a given item,
     * avoiding the need to load and save the full entity.
     */
    @Modifying
    @Query("UPDATE Item i SET i.viewCount = i.viewCount + 1 WHERE i.id = :id")
    void incrementViewCount(@Param("id") Long id);

    boolean existsByCategoryId(Long categoryId);
}
