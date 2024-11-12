package fer.portane.repository;

import fer.portane.model.ClosetComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClosetComponentRepository extends JpaRepository<ClosetComponent, Long> {
}
