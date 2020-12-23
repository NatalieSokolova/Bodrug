DROP TABLE IF EXISTS collections CASCADE;

CREATE TABLE collections (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(5000) NOT NULL,
  coverurl VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(5000) NOT NULL,
  coverurl VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(5000),
  url VARCHAR(255) NOT NULL,
  collection_id INTEGER REFERENCES collections(id) ON DELETE CASCADE,
  story_id INTEGER REFERENCES stories(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS paintings CASCADE;

CREATE TABLE paintings (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(5000),
  url VARCHAR(255) NOT NULL,
  year INTEGER,
  materials VARCHAR(500),
  price INTEGER
);

DROP TABLE IF EXISTS faqs CASCADE;

CREATE TABLE faqs (
  id SERIAL PRIMARY KEY NOT NULL,
  question VARCHAR(5000) NOT NULL,
  answer VARCHAR(5000) NOT NULL
);

DROP TABLE IF EXISTS blogEntries CASCADE;

CREATE TABLE blogEntries (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(5000) NOT NULL,
  slug VARCHAR(50) NOT NULL,
  article VARCHAR(10000) NOT NULL,
  coverUrl VARCHAR(255) NOT NULL,
  photoUrls VARCHAR(1000)[],
  dateString VARCHAR(255) NOT NULL
);