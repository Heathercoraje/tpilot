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
  activity TEXT NOT NULL,
  today_date DATE,
  activity_time TIME
);

INSERT INTO users (name, password) VALUES
('Katia', 'katia123'),
('Heather', 'heather213'),
('Mario', 'MarioAlBatata'),
('Harry', 'Harry1Potter');

INSERT INTO addActivityTime(user_id, activity, today_date, activity_time) VALUES
('1', 'sleep', '11-07-2017', '06:00'),
('2', 'eat', '11-07-2017', '00:15'),
('3', 'fitness', '12-07-2017', '1:30'),
('3', 'fitness', '12-07-2017', '0:30'),
('3', 'sleep', '12-07-2017', '1:00'),
('4', 'study', '21-07-2017', '05:10'),
('2', 'eat', '18-07-2017', '00:10'),
('3', 'sleep', '12-07-2017', '08:00');

COMMIT;
