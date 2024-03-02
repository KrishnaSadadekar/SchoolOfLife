package com.example.MentorS.service;

import com.example.MentorS.models.Category;
import com.example.MentorS.models.Course;
import com.example.MentorS.models.Trainer;
import com.example.MentorS.repository.CategoryRepository;
import com.example.MentorS.repository.CourseRepository;
import com.example.MentorS.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@Service
public class AdminService {
    @Autowired
    CourseRepository courseRepository;

    @Autowired
    TrainerRepository trainerRepository;

    @Autowired
    CategoryRepository categoryRepository;

    private String generateImageNameWithDateTime(String originalFileName) {
        // Format the current date and time
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");

        // Append formatted date and time to the original file name
        return now.format(formatter) + "_" + originalFileName;
    }

    public String uploadImage(MultipartFile file, String filePath) {
        try {
            String imageNameWithDateTime = generateImageNameWithDateTime(file.getOriginalFilename());


            System.out.println("Before saveFile ");

            Path path = Paths.get(filePath, imageNameWithDateTime);


            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            return imageNameWithDateTime;
        } catch (IOException e) {
            System.out.println("Image upload error" + e.getMessage());
            throw new RuntimeException(e);
        }

    }


    public Course addCourse(Course course, MultipartFile file) {
        System.out.println("In Add Course function");

        if (file.isEmpty()) {
            course.setImgUrl("defaulttrainer.png");
            System.out.println("File is Empty!");

        } else {
            String path = "D:\\Suhas\\Krishna\\SchoolOfLife\\Frontend\\public\\img\\courses";

            String imageNameWithDateTime = uploadImage(file, path);
            course.setImgUrl(imageNameWithDateTime);

        }


        return courseRepository.save(course);
    }

    public Course delete(Integer id) {
        Course course = courseRepository.findById(id).get();

        courseRepository.delete(course);
        return course;
    }

    public Course updateCourse(Course course, MultipartFile file) {


        if (file.isEmpty()) {
            course.setImgUrl(course.getImgUrl());
            System.out.println("File is Empty!");

        } else {
            String path = "D:\\Suhas\\Krishna\\SchoolOfLife\\Frontend\\public\\img\\courses";
            String imageNameWithDateTime = uploadImage(file, path);
            course.setImgUrl(imageNameWithDateTime);

        }

        return courseRepository.save(course);
    }

    public Trainer addTrainer(Trainer trainer, MultipartFile file) {
        System.out.println("In Add Service ");

        if (file.isEmpty()) {
            trainer.setImgUrl("defaulttrainer.png");
            System.out.println("File is Empty!");

        } else {
//            String path = "C:\\Users\\User\\OneDrive\\Desktop\\New folder\\my-raz\\public\\img\\trainers";
            String path = "D:\\Suhas\\Krishna\\SchoolOfLife\\Frontend\\public\\img\\trainers";
            String imageNameWithDateTime = uploadImage(file, path);
            trainer.setImgUrl(imageNameWithDateTime);

        }

        return trainerRepository.save(trainer);


    }

    public Category addCategory(String c) {
        Category category=new Category();
        category.setCategoryName(c);
        return categoryRepository.save(category);
    }


}
