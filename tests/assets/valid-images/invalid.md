# How The Web Works

## Learning Goals

- Define a client and server
- Explain what an HTTP request is
- Explain the nature of request and response
- Define a static site vs. a dynamic site

## Introduction

How many times a day do you use the internet? How many times do you load a
different web page? Think about how many times you do this in a year! As a user,
all you really need to know is the URL to navigate to. You don't need to concern
yourself with what's going on behind the scenes. But if you want to be a web
developer, it's important to have some understanding of how the web works. From
here on out, you are no longer just a user of the internet. You are a creator of
the web.

## Client and Server

So seriously, how does this:

```txt
https://github.com/learn-co-curriculum/phase-1-how-the-web-works
```

Turn into this:

![Github Readme](./github-readme.png)

The internet operates based on conversations between the client (more familiarly
known as the browser) and the server (the code running the web site you're
trying to load). By typing in that URL into your browser, you (the client) are
_requesting_ a web page. The server then receives the request, processes it, and
sends a _response_. Your browser receives that response and shows it to you.

These are the fundamentals of the web. Browsers send requests, and servers send
responses. Later in the program, we will be writing our servers using Ruby and a
few different frameworks. But your browser doesn't know, nor does it care, what
server it talks to. How does that work? How can a server that was written 15
years ago still work with a browser written 15 months or days ago?

In addition, you can use multiple clients! You can use Chrome, Safari, Firefox,
Edge, and many others. All of those browsers are able to talk to the same
servers. Let's take a closer look at how this occurs.

## HTTP Overview

Communication between different clients and different servers is only possible
because the way browsers and servers talk is controlled by a contract, or
_protocol_. Specifically, it is a protocol created by
[Tim Berners-Lee][sir tim] called **Hyper Text Transfer Protocol**, or HTTP.
Your server will receive requests from the browser that follow HTTP. It then
responds with an HTTP response that all browsers are able to parse.

HTTP is the "language" browsers speak. Every time you load a web page, you are
making an HTTP **request** to the site's server, and the server sends back an
HTTP **response**. When you use `fetch` in JavaScript, you are also making an
HTTP request.

In the example above, the client is making an **HTTP GET request** to GitHub's
server. GitHub's server then sends back a response and the client renders the
page in the browser.

![computer server](./Image_17_ComputerServer.png)
