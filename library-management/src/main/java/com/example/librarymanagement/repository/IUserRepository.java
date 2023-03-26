package com.example.librarymanagement.repository;

import com.example.librarymanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.username = ?1 AND u.password = ?2")
    User getUserByUsernameAndPassword(String username, String password);
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User getUserByUsername(String username);
//    @Query(nativeQuery = true, "SELECT book.`name`, `order`.order_date, `order`.`status` FROM book join orderdetail join `user` join `order` where book.id = orderdetail.book_id and `user`.id = `order`.id and `order`.id =orderdetail.order_id");
//@Query(nativeQuery = true, value = "SELECT book.`name`, `order`.order_date, `order`.`status` FROM book JOIN orderdetail ON book.id = orderdetail.book_id JOIN `order` ON `order`.id = orderdetail.order_id JOIN `user` ON `user`.id = `order`.user_id WHERE `order`.id = :orderId")
//List<Object[]> getBookOrderDetailsByOrderId(@Param("orderId") Long orderId);
@Query(nativeQuery = true, value = "SELECT book.`name`, `order`.order_date, `order`.`status` FROM book JOIN orderdetail ON book.id = orderdetail.book_id JOIN `order` ON `order`.id = orderdetail.order_id JOIN `user` ON `user`.id = `order`.user_id WHERE `user`.username = :username ")
List<Object[]> getBookOrderHistoryByUsername(String username);
//    List<Object[]> getBookOrderHistoryByUsername(@Param("username") String username);
@Query(nativeQuery = true, value = "SELECT `user`.id, `user`.username, `user`.email, book.id as bookId, book.`name`, `order`.order_date, `order`.`status`" +
        " FROM book JOIN orderdetail ON book.id = orderdetail.book_id JOIN `order` ON `order`.id = orderdetail.order_id JOIN `user` ON `user`.id = `order`.user_id WHERE `status` = 0 ORDER BY order_date asc")
List<Object[]> getNotReturnedYetOrder();

    @Query(nativeQuery = true, value = "SELECT `user`.id, `user`.username, `user`.email, book.id as bookId, book.`name`, `order`.order_date, `order`.`status`" +
            " FROM book JOIN orderdetail ON book.id = orderdetail.book_id JOIN `order` ON `order`.id = orderdetail.order_id JOIN `user` ON `user`.id = `order`.user_id ORDER BY order_date asc")
    List<Object[]> getLibraryOrderHistory();


}
