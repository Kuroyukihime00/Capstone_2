CREATE TABLE periode (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE beasiswa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE periode_beasiswa (
    periode_id INT,
    beasiswa_id INT,
    start DATE,
    end DATE,
    active BOOLEAN,
    PRIMARY KEY (periode_id, beasiswa_id),
    FOREIGN KEY (periode_id) REFERENCES periode(id),
    FOREIGN KEY (beasiswa_id) REFERENCES beasiswa(id)
);

CREATE TABLE mahasiswa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE beasiswa_detail (
    mahasiswa_id INT,
    periode_id INT,
    beasiswa_id INT,
    IPK DECIMAL(3, 2),
    poin_portfolio INT,
    status_1 BOOLEAN,
    status_2 BOOLEAN,
    PRIMARY KEY (mahasiswa_id, periode_id, beasiswa_id),
    FOREIGN KEY (mahasiswa_id) REFERENCES mahasiswa(id),
    FOREIGN KEY (periode_id) REFERENCES periode(id),
    FOREIGN KEY (beasiswa_id) REFERENCES beasiswa(id)
);

CREATE TABLE jenis_doc (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE detail_file (
    mahasiswa_id INT,
    periode_id INT,
    beasiswa_id INT,
    jenis_doc_id INT,
    path VARCHAR(255),
    PRIMARY KEY (mahasiswa_id, periode_id, beasiswa_id, jenis_doc_id),
    FOREIGN KEY (mahasiswa_id) REFERENCES mahasiswa(id),
    FOREIGN KEY (periode_id) REFERENCES periode(id),
    FOREIGN KEY (beasiswa_id) REFERENCES beasiswa(id),
    FOREIGN KEY (jenis_doc_id) REFERENCES jenis_doc(id)
);
