---
publishDate: 'Apr 23, 2020'
title: 'What is actually Serverless 🤷‍♂️'
description: 'Lorem ipsum dolor sit amet'
excerpt: 'Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat'
image: 'https://miro.medium.com/v2/1*cgrUVsfOcmi2QKNQKSISAg.png'
tags: [markdown, blog]
---

Don’t just get confused by the name Serverless, It obviously doesn’t mean “without server”, it means it’s not your server, or don’t worry about where is your code running. Serverless is misleading because servers still exist, but developers do not need to worry about managing the server.

## <a name="Headings"></a>Why Serverless? ⏰💰

Our application runs on a server and we are responsible for managing the resources for it. We are charged for keeping the server up even when we are not serving out any requests. We are also responsible for the uptime and maintenance of the server and all its resources.
For small or startup companies these things will be too much to handle because you need a team for DevOps.

But Serverless Model will help you reduce loads of work, time, and cost. The reason serverless is getting hype because of many reasons like It is very inexpensive, Auto Scale/ Scalable, No server maintenance needed, More Secure, Easy to use. Especially the part where you only pay for the uptime.

## Serverless is also known as FAAS 👨‍💻

FAAS means Function as a Service, We basically write different functions for doing a different kind of work. You might be used to deploying your application as a single Rails or Express monolith app. But in the serverless world, you are typically required to adopt a more microservice-based architecture.

## Cloud Platforms that provide Serverless ☁️ 💻
![Alt Text](https://miro.medium.com/v2/resize:fit:786/1*OjcxuMC2QrGH6_oAR-G_zA.jpeg)
There are multiple cloud platforms providing this service, such as <b>OpenWhisk, Google Cloud Provider, Microsoft Azure, Amazon Web Services</b>. But We will basically be talking about Amazon Web Services (AWS) Lambda.

## What is AWS Lambda
AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. <a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Lambda</a>(or Lambda for short) is a serverless computing service provided by AWS. Lambda basically introduced for Node.js but now it supports JAVA, Python, C#, and JS. In shorts, Lambda function exports your functions/Module send to AWS, wraps it up and create an endpoint for your function and provide you API for it. It is exactly that simple as it sounds.

<b>What events can trigger a Lambda?</b>
- HTTP events
- Scheduled(Cron Jobs)
- Watcher monitors other parts of the AWS echo system such as S3 buckets.

## Develop and Deploying 🔥
<a href="https://www.serverless.com/" target="_blank" rel="noopener noreferrer">Serverless framework</a> provides you command-line interface from where you configure your deployment. Deployment here is very easy, there is only one .yml file which will take care of all your configurations. You just need to install the serverless command line and <a href="https://aws.amazon.com/cli/" target="_blank" rel="noopener noreferrer">AWS Command Line</a>and allow Serverless to use your AWS credentials to deploy.

## How to deploy 🌈

Okay, In this case, I will be deploying a simple <b>Node.js application</b> to AWS Lambda using Serverless framework. All you need to do is create a user using <b>Identity and Access Management (IAM)</b> in AWS which will give you access key 🔑 and secret key 🔐. Below code will allow the serverless to get your AWS services
![Alt image](https://miro.medium.com/v2/1*sWMptKn8kbfm_3MEgzOzIQ.png)
<div style="text-align:center;">Creating user and getting the keys 🔑</div>

<b>|</b><i> serverless config credentials --provider aws --key <access key 🔑 > --secret <secret_key 🔐 >--profile <username></i>

Once the serverless configuration is done. you can just create a boilerplate for serverless functions by the below code.

<b>|</b><i> sls create -t aws-nodej 💥</i>

![Alt image](https://miro.medium.com/v2/1*3zu2wxYYrjyi9PQ6tFAnBA.png)
<div style="text-align:center">Once you run above code your folder structure will be something like this. with a minimum configuration of .yml file shown in the screenshot</div>

we can use serverless as sls in shorts. Now you can just create your

<b>|</b><i> sls invoke local -f hello 💥</i>

![Alt image](https://miro.medium.com/v2/1*SJfbK8QDN2Q5J-RoDnHKnw.png)
<div style="text-align:center;">Above command will run your application locally, you can test your output.</div>

In the above screenshot you would have seen there is a handler.js file which is having a function exported. That’s where your code will go. And the “-f hello” in command is telling only that particular function to be triggered. Finally deployment.

<b>|</b><i> sls deploy -s production -f hello 💥</i>

You can use -s for deployment. you can even deploy to the development environment. for Checking logs

<b>|</b><i> sls logs -f hello -s production — startTime 10m. 💥</i>

![Alt image](https://miro.medium.com/v2/1*lDTpyzTJuQW2muVPvozJiw.png)

<b>And Finally! You can see the endpoint generate. Cheers 🍻 🎉</b>



[[Move to top]](#top)