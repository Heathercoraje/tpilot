BEGIN;

DROP TABLE IF EXISTS users, addActivityTime;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE addActivityTime (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  day TEXT NOT NULL,
  work VARCHAR,
  sleep VARCHAR,
  eat VARCHAR,
  fitness VARCHAR,
  study VARCHAR,
  school VARCHAR,
  entertainment VARCHAR,
  errand VARCHAR
);

INSERT INTO users (name, password) VALUES
('Katia', 'katia123'), ('Heather', 'heather213');

INSERT INTO addActivityTime(user_id, day, work, sleep, eat, fitness, study, school, entertainment, errand) VALUES
('1', 'Monday', '4:00', '6:00', '00:15', '00:20', '0:50', '4:00', '00:25', '01:25'), ('2', 'Friday', '2:00', '6:00', '00:15', '00:20', '1:00', '6:00', '00:10', '00:25');

COMMIT;
