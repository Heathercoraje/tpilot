# Tpilot
**Track your time, get things done**

Tpilot is a simple time tracker application to enhance your time-spending habit.
Tpilot offers three following functions:

+ **Timer** Tpilot tracks how much time the user spends on each tasks by activating timer.
+ **Insight** Tpilot will show you how much you spend in every tasks and will compare it as weekly.
+ **Alarm** Tpilot have an alarm if user want to-do the task in short time.

**To check out the app, please clone this repository.**
* clone our repository
```
git clone https://github.com/Heathercoraje/tpilot.git
```
* Install the dependencies
```
npm i
```
* Run start
```
npm run devStart
```

## Our Product:

We want to create a web application:
* will track the user time in every tasks Add alarm to finish the tasks.
* see the insight and Comparision weekly.

## User Story:

**As a user who waist his/her time I would like to Track...**
* I can track my time in every task in make in single day.

**As a user who is interested to see how much time i spend...**
*  I can see the insight and know how much time i spends in every single task.
* I can see the comparision from last week.

**Suggested additional requirements / stretch goals:**
* I can analysis my data by daily/weekly/monthly or by activity.
* auto make new functions.

## Schemas:
**users**

| id  |  name | surname |
| --- |:-----:|:-------:|
| 1 | Katia | Ashkar |
| 2 | Heather | corje |

**reservations**

| id  | users_id | activity | date | time |
| --- |:---------:|:------:| -------: | ----- |
| 1 | 1 | Sleep | 8:00 |11 Set 2017|
| 2 | 2 | Sleep | 00:45 |11 Set 2017|
| 3 | 1 | Eat | 00:30 |12 Set 2017|
| 4 | 2 | Reset | 00:35 |12 Set 2017|

## Wireframe:

![altinline](https://user-images.githubusercontent.com/26391874/30265328-81b3e602-96e4-11e7-87a6-821777c9a884.png)

## Code Guidelines:
* CamelCase for variable names
* Comments for code clarification
* Sole use of arrow-functions on backend
* Use of QuerySelector to grab elements from html to js

## Team Checklist:
- [ ] Wireframe & Architecture
- [ ] Create schemas
- [ ] Research sql injections
- [ ] Create skeleton files
- [ ] Create database
- [ ] Create back-end server
- [ ] Create front-end client
- [ ] Establish Heroku
