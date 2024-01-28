---
publishDate: 'Aug 17, 2019'
title: 'Solving Real Life Business Case Using Supervised Learning with Tensorflow 2.0'
description: 'Task: Creating a machine learning algorithm that can predict if a customer will buy again'
excerpt: ''
image: 'https://miro.medium.com/v2/1*AUjS_z-F8nDk-3Ax4MRh0Q.jpeg'
tags: [markdown, blog]
---

<b>Business Case:</b> We have data from an e-book app company, Given data from their database, In dataset each customer has purchased a book once, that’s the condition to be included.

## <a name="Headings"></a>Task: Creating a machine learning algorithm that can predict if a customer will buy again

Now, We want to create a machine learning algorithm, based on our dataset, that can predict whether the customer is going to buy e-book again or not.
The main idea is that company shouldn't spend it’s advertising budget to the customers who are unlikely to come back and purchase.
If we can focus our effort to the customers who are likely to come, then we can improve our sales and profitability figures.

So our model will take several metrics and try to predict human behavior.

Okay Let’s talk a look at our data. I have included a git link where you can download the data. The data do not have column headers included, as we require no text on the data when train the model. Just to make you understand, I’ll show you what are the columns.

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*roQ7ifORkSCH-g_oZDMBkg.png)

ID columns are the customers, it can be anything 1,2,3… or atul007, john123 makes no difference, we will skip that any way.

Price variable is always a good predictor and Review variable show an engagement with the platform, it shows customers are more likely to come again.

If you see Review10/10 most of the rows are empty which is a bad dataset. we can substitute all missing value by the average of the column which is 8.91. For our machine learning algorithms, 8.91 means status quo, a review bigger than 8.91 indicate above average feeling, and below 8.91 indicate below average feeling.

Notice, I am saying “feelings”, Review is yet anther variable that is average, a customer might have bought 2–3 books on the platform, based on average rating he/she would have left, it he “feeling”.

Last visited minus Purchase date also shows the customers engagement. It shows how frequently customer visits the app

Data gathering is always a crucial task, in this case it is from an e-book app as we said, it’s has 2 years worth of engagement.

Targets are the column which is a Boolean, will tell you if he/she will purchase again 1 means Converted, and 0 means didn’t.

## What does it mean to convert?

We have taken extra 6 months of data to check if that user has converted, So we have 2 years and 6 months data. So if in 6 month he/she has purchased a book, then we count as converted.
![Alt Text](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Shv2HgRmKsLLDInXyGonYg.png)

So, it’s a classification problem with 2 classes, won’t buy-0 and buy-1.

Here is some important steps before getting into code.

### 1. Preprocess the data

A. Balance the dataset :We have to make sure the data is equally balanced. for example if we have 90% data of customer who are unlikely to come back,
a model with 80% accuracy will always give result of customer who are unlikely to come back.So we have to make sure data it 50–50% divided.

B. Divide the data dataset in training, validation and test

C. Save the data into tensor friendly format.

#### 2. Create the machine learning algorithm.

Let’s Open Jupyter Notebook and start coding…

Start by importing Numpy and preprocessing from sklearn for Extracting the data from csv and preprocessing

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RfP9lqigycf5J8JVmcDqhg.png)

Now we have all the data’s in our variables unscaled_input_all consist of the data except first and last columns as mentioned earlier.

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*f4nVWDLcx7G1GsxxmBNJBQ.png)

We have balanced the dataset by removing extra zeros and made it almost equal to ones. Let’s Standardize the dataset using Preprocessing .

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*g_xoppzGJ0QiTl3euI1MTQ.png)

we are done with Preprocessing, there is only one thing remaining, we need to shuffle the data, It is possible the data is collected in date series, we need to shuffle. It should be randomly split as possible.

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*9pi-3_eQwzVXpdddfjCU8g.png)

So far we have Preprocessed , Shuffled and balanced the data, what we have left is split into training, validation and test, let’s do that now.

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*IisHoiks6JdPf4AxzlQlqg.png)

Validation data is for preventing overfitting, Now we are done with the data, let’s create our model. We are going to use Tensorflow 2.0 to create our model.

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*vW0wELr4u7lcVcRERPWA7A.png)

And now Let’s Train our model

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*0YZcCRvmTu0cfty3T0KlxQ.png)
![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*EsysZRPQbw-TvPYyxZGy3Q.png)

The result what we get is outstanding. After a train of 100 epoch we have reached an accuracy to approx 90%. But before we get too exited, take a moment to think why did our model take all 100 epochs? Is there a danger of overfitting. The answer is yes we have overfitted the model. if you see the above image. val_loss is increasing which mean we need to do an early stopping before the model starts doing overfitting.

We will use tensorflow earlystopping

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*1vSV7YEdehydnBGu1ayMiA.png)

Now we can see the accuracy is 92% and went to only 7 epochs after using patience=3

Great!!! Now we can test our model

To test the model we will use the method Evaluate from tensorflow

![Alt Text](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*Pmxzo8_ed-Vvwe3MEdxhPQ.png)

Okay, Now that’s the final accuracy of the model.

Please try out yourself and comment. Code is available in GITHUB

Thank you..

#TensorFlow #Tensorflow2 #MachineLearning #Overfitting #SupervisedLearning

[[Move to top]](#top)
