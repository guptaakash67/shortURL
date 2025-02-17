I have developed a project called **ShortURL** using **Node.js, Express.js, MongoDB, and Postman API**. This project is designed to help users shorten long URLs into compact, **8-character** unique short links.  

When a user submits a URL, the system checks if a shortened version already exists in the database. If the number of stored URLs falls within a range (e.g., 100 to 200 or more), it regenerates a new unique 8-letter ID. Users can then retrieve the original URL by entering the short ID in the search field, which redirects them to the intended website.  

Additionally, the system keeps track of each visit to a shortened link. It logs the number of times users access the same URL and records the timestamps of each visit. This data is stored in **MongoDB**, allowing for detailed analytics on user activity. The tracking system helps analyze visit patterns, providing insights into how frequently a particular short link is accessed over time.  

The primary goal of this project is to make URL sharing more efficient by converting lengthy links into shorter, more manageable ones. It enhances convenience for users who need to share or store links without dealing with excessive URL lengths.
![image](https://github.com/user-attachments/assets/fa046c2e-c63d-4f8c-bd3f-50836cacd0c4)

![image](https://github.com/user-attachments/assets/15792faf-5059-40ad-9ff6-a8d4299cf863)

![image](https://github.com/user-attachments/assets/7c7023c8-aade-4db1-b769-cd8925c8c0a9)
