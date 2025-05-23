// -- 1. Retrieve all user names and their reputations.
// select DisplayName,Reputation from users

// -- 2. List posts created in 2024.
// select * from posts where CreationDate > '2024-01-01'

// -- 3. Find comments longer than 200 characters.
// select text from Comments where LEN(text) > 200

// -- 4. Get the titles of posts with a score above 50.
// select Title,score from posts where score > 50

// -- 5. Count how many users joined per year.
// SELECT YEAR(CreationDate) AS join_year, COUNT(*) AS user_count
// FROM users
// WHERE CreationDate IS NOT NULL
// GROUP BY YEAR(CreationDate)
// ORDER BY join_year;

// -- 6. Find the earliest created post.
// SELECT MIN(CreationDate) AS earliestPost
// FROM Posts
// WHERE CreationDate IS NOT NULL;

// -- 7. Display badges awarded more than once.
// select UserId, COUNT(*) as awardedMoreThanOnce
// from Badges
// GROUP BY UserId
// Having count(*) > 1

// -- 8. Show users with display names starting with 'A'.
// SELECT DisplayName from Users WHERE (lower(DisplayName) LIKE 'a%');

// -- 9. Find the top 5 longest comments.
// SELECT top 5 id,text, LEN(text) AS comment_length
// FROM comments
// ORDER BY comment_length DESC

// -- 10. Get total votes by type.
// SELECT VoteTypeId, COUNT(*) AS total_votes
// FROM Votes
// GROUP BY VoteTypeId;

// -- 11. Find all posts along with their corresponding user names.
// select Users.Id, count(posts.id) as post_count
// from Users
// join Posts on users.Id = posts.OwnerUserId
// group by users.Id

// -- 12. List all comments with the display name of the user who made them.
// SELECT COMMENTS.TEXT AS COMMENT_TEXT, USERS.DisplayName AS USERNAME
// FROM Comments
// JOIN USERS ON COMMENTS.UserId = USERS.Id

// -- 13. Display the number of posts each user has made.
// SELECT Users.Id, COUNT(Posts.OwnerUserId) AS PostCount
// FROM Posts
// JOIN Users ON Posts.OwnerUserId = Users.Id
// GROUP BY Users.Id;

// -- 14. Show all posts that received more than 3 different types of votes.
// SELECT PostId
// FROM Votes
// GROUP BY PostId
// HAVING COUNT(DISTINCT VoteTypeId) > 3;

// -- 15. List all users who have received both upvotes and downvotes.
// SELECT USERS.DisplayName,USERS.DownVotes,USERS.UpVotes FROM Users
// WHERE Users.DownVotes > 0 AND USERS.UpVotes > 0

// -- 16. Find the highest-scoring post for each user.
// SELECT p.OwnerUserId, p.Id, p.Score
// FROM Posts p
// JOIN (
//     SELECT OwnerUserId, MAX(Score) AS MaxScore
//     FROM Posts
//     GROUP BY OwnerUserId
// ) maxPosts
// ON p.OwnerUserId = maxPosts.OwnerUserId AND p.Score = maxPosts.MaxScore;

// -- 17. Display all posts with their comment counts.
// select id,CommentCount
// from posts
// order by posts.Id

// -- 18. List users who have never made a post.
// SELECT Users.Id
// FROM Users
// LEFT JOIN Posts ON Users.Id = Posts.OwnerUserId
// WHERE Posts.Id IS NULL;

// -- 19. Find posts that have more than 10 comments and more than 20 votes.
// SELECT p.Id
// FROM Posts p
// JOIN Comments c ON p.Id = c.PostId
// GROUP BY p.Id, p.Score
// HAVING COUNT(c.Id) > 10 AND p.Score > 20;

// -- 20. Show all users who received at least one badge and made at least one post.
// SELECT u.DisplayName
// FROM Users u
// JOIN Posts p ON p.OwnerUserId = u.Id
// JOIN Badges b ON b.UserId = u.Id
// GROUP BY u.DisplayName;

// -- 21. Display the top 3 users with the highest total votes on their posts.
// SELECT TOP(3) u.DisplayName, SUM(p.Score) AS TotalVotes
// FROM Users AS u
// JOIN Posts AS p ON p.OwnerUserId = u.Id
// GROUP BY u.Id, u.DisplayName
// ORDER BY TotalVotes DESC;

// -- # Intermediate Exercises (31–70): Aggregation, Joins, Subqueries
// SELECT AVG(u.Reputation) AS average_reputation
// FROM Users u
// JOIN (
//     SELECT UserId
//     FROM Badges
//     GROUP BY UserId
//     HAVING COUNT(*) >= 5
// ) b ON u.Id = b.UserId;

// -- 32. List posts with more comments than votes.
// SELECT p.Id, p.Title
// FROM Posts p
// JOIN (
//     SELECT PostId, COUNT(*) AS comment_count
//     FROM Comments
//     GROUP BY PostId
// ) c ON p.Id = c.PostId
// JOIN (
//     SELECT PostId, COUNT(*) AS vote_count
//     FROM Votes
//     GROUP BY PostId
// ) v ON p.Id = v.PostId
// WHERE c.comment_count > v.vote_count;
