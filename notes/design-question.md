# Designing Twitter
How would you design Twitter?
*How would you identify challenges in the product?*
*How would you scale out the product for 1,000s of users?*
- *Focus is usually on the **Data Models***
- ***DO NOT** mention specific technologies*
- *Use the whiteboard for visuals*

1. Figure out area to focus on. Ask interview: "Hey, this product Twitter has a many different features involved in it. Is there a particular area you would like me to focus on?"

2. Without specific direction, focus on the `Data Model`. 

> *"How you would build out the database to reflect all the information in a given product?"*

3. Discuss why you would use a types of technologies and not just listing off specifics technologies. 
> *"I would decide to use a javacript framework on the front but it would have to fulfill these requirements... (work well on moblie, easy render out a list of tweets, etc.). I would design a backend that was primarily as REST API. This would allow us to have centralize backend that is supporting the moblie apps and web framework."*

4. Above all, voice your thoughs through out the response/process. 


## Strategy

1. Identify Two Core Features in the Product
>  This is where you can draw out the diagram of the core user interface (Tweet and Feed).
2. Possible Implementation
> This would be everything from web interface to sending/handling a request on the backend. Think about some database solutions (fields, data types, etc.).
3. Identify and Address Difficulties
> Discuss challeges around your core two features. What you need to figure out to make feature work.
> * **Tweeting** - What does a tweet look like in the DB?
> * **Tweeting** - How to make the `#topic` and `@mention` system?
> * **Tweeting** - How to implement retweets?
> * **Feed** - How to show interesting tweets at top of feed? Track popularity or views?
4. Solution for Scaling
> Discuss general stategies of scaling
> * **Caching**
> Doing expensive work one time (Server -> Database) storing the result to be resused next time its queued (Server -> Cache/Memory Store). 
> * **Server Architecture**
> Create a load balancer that users make request to and that machine randomly assigns request to one of many other machines. Example of **Horizontal Scaling** 
