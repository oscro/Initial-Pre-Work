# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com/ a GET request is made to the server on which the website is hosted. This communication between nodes is done via a network protocol which is a set of rules that determine how to transmit and receive data between computers. The protocol deployed to get and receive the HTML document, in the case above (https://www.techtonic.com/), is HTTPS which stands for Hypertext transfer protocol secure. The secure portion of HTTPS just means that all communication between client and server is encrypted. 

Our client browser makes the GET request to the server and the server sends a response in the form of the HTML document specified in the URL which in this case would be the index.html document since the URL specifies (/) meaning root. Our browser receives the HTML document from the server and renders it on our browser for us to see. 

## From start to finish, how does data reach you to be rendered in the browser?

It is important to make a distinction between the various computers interacting together when we make a GET request which begins the process of allowing data to be rendered on the browser. Typically - a connection takes place between two computers, the client and server. A server can be thought of as a computer devoted to distributing content. A client is a program such as a web browser that receives the content from a server and typically renders the content served on the program.

The steps are listed below: 

1.	The client hits enter on the web browser to begin the process of receiving the files requested.

2.	The browser goes to the DNS server and finds the IP address of the server that houses the files they are requesting. (Domain Name Servers – essentially a directory for website IP addresses)

3.	The browser sends an HTTP/s request to the server – requesting the files to be sent to the client. 

4.	Server sends the website files in the form of data packets.

5.	The browser parses the data and displays it to the user. 

## What code is rendered in the browser?

HTML – Hypertext Markup Language - Provides the structure of the webpage.

CSS – Cascading Style Sheets - Allows for element styling and presentation. 

JavaScript – Enables webpage functionality and allows for dynamic content generation. 


## What is the server-side code’s main function?

Server-side code’s main function is to process client requests and serve content to the client. The server will render pages to the client, allow for user validation, and saving and retrieving data to/from databases. Most of these requests are done through an API which stands for application programming interface. It essentially tells the server how to process requests made by a client. These requests will most often come in the form of a GET, POST, PUT, and DELETE request. 

## What is the client-side code’s main function?

Client-side code’s main function is to display dynamic web content and interface with the server. Client-side code can contain elements that allow for API requests as well as elements that structure and present a web page to the user. 

## What is runtime?

Many sources are stating that runtime is the time in which a program or application is running. It begins from the time the code starts executing to the time the code stops executing. 

Other sources are stating that runtime describes software instructions that are executed while the program is running, specifically those that are not written explicitly. 

I had trouble with this specific question as there are different explanations across the board but seem to all be coming to the same conclusion that runtime takes place as an application is running. 

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The number of instances for client-side assets depends on how many clients are requesting the assets to be served. There is only one instance in place for a single client when a single request is made but as the question is asked, it all depends on how many times the assets are served in a given moment. There can be many instances of client-side assets at any given moment dependent on how many clients are viewing the assets. 

## How many instances of the server-side code are available at any given time?

There is only one instance of server-side code available at any given time if the server is live. The instance is created once the server code is running and waiting for requests to come in.  

## How many instances of the databases connected to the server application are created?

One instance of a database connecting to the server is created once the server is live. Once the server is up and running the DB connection is created and the instance is in place. When the server is down, the DB connection ceases. 

Sources:
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
https://restful.io/an-introduction-to-api-s-cee90581ca1b
https://stackoverflow.com/questions/3900549/what-is-runtime
https://techterms.com/definition/runtime
