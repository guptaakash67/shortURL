I have developed a project called **ShortURL** using **Node.js, Express.js, MongoDB, and Postman API**. This project is designed to help users shorten long URLs into compact, **8-character** unique short links.  

When a user submits a URL, the system checks if a shortened version already exists in the database. If the number of stored URLs falls within a range (e.g., 100 to 200 or more), it regenerates a new unique 8-letter ID. Users can then retrieve the original URL by entering the short ID in the search field, which redirects them to the intended website.  

Additionally, the system keeps track of each visit to a shortened link. It logs the number of times users access the same URL and records the timestamps of each visit. This data is stored in **MongoDB**, allowing for detailed analytics on user activity. The tracking system helps analyze visit patterns, providing insights into how frequently a particular short link is accessed over time.  

The primary goal of this project is to make URL sharing more efficient by converting lengthy links into shorter, more manageable ones. It enhances convenience for users who need to share or store links without dealing with excessive URL lengths.
