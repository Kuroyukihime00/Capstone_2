-- Membuat database
CREATE DATABASE scholarship_db;
GO

-- Menggunakan database yang baru dibuat
USE scholarship_db;
GO

-- Membuat tabel users
CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  role VARCHAR(50) CHECK (role IN ('admin', 'student', 'faculty', 'program')),
  password VARCHAR(100)
);
GO

-- Membuat tabel scholarships
CREATE TABLE scholarships (
  id INT IDENTITY(1,1) PRIMARY KEY,
  student_id INT,
  type VARCHAR(50) CHECK (type IN ('prestasi', 'bantuan_ekonomi')),
  gpa DECIMAL(3, 2),
  documents TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  FOREIGN KEY (student_id) REFERENCES users(id)
);
GO

-- Membuat tabel periods
CREATE TABLE periods (
  id INT IDENTITY(1,1) PRIMARY KEY,
  start_date DATE,
  end_date DATE,
  active BIT DEFAULT 0
);
GO
