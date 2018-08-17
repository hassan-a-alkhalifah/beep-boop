# _Beep Boop_

#### _A program to possibly provide the word beep or boop depending on a number entered_

#### By _**Hassan Al-khalifah**_

## Description

_The website is designed to convert any number that contains 0 into the word "Beep!" and any number entered that contains 1 into the word "Boop!". The only catch is if a entered number is divisible by 3 is returned as "I'm sorry, "entered name", I'm afraid I can't do that". Lastly, the user should be able to enter a new number which should clear the previous results and display the updated results._

## Specifications

* Program prevents user from entering only white space"
  * **Example Input: " "**
  * **Example Output: ["Input required. Please enter only numbers."]**
* Program prevents user from entering any character except numbers"
  * **Example Input: AAA&&&!!!__**
  * **Example Output: ["Unable to except input. Please enter only numbers."]**
* Program replaces 0 with "Beep!"
  * **Example Input: 0**
  * **Example Output: ["Beep!"]**
* Program replaces 1 with "Boop!"
  * **Example Input: 1**
  * **Example Output: ["Boop!"]**
* Program replaces numbers divisible by 3 with "I'm sorry, "entered name", I'm afraid I can't do that."
  * **Example Input: 6**
  * **Example Input: Bill**
  * **Example Output: ["I'm sorry Bill, I'm afraid I can't do that."]**

## Setup/Installation Instructions

* _Make sure you have Git downloaded and setup on your local device._

* _Open terminal on your local device._

* _If you have not configured Git on your local device, in the terminal, you will need to set up a global configuration by entering the following:_

```
_git config --global user.name "Your first and last name"_

git config --global user.email example@gmail.com_
```
* _If you're not already in the desktop directory in your terminal, then direct yourself to the desktop directory by entering the follow in your terminal:_

`_cd Desktop_`

* _You can now begin by cloning the GitHub remote repository to your desktop. On the GitHub website with the remote GitHub repository, you will find a button colored green with the text "Clone or Download." Click the button and copy the GitHub repository URL._

* _Now in your terminal, enter the following:_

`_git clone "the GitHub repository URL you copied"_` without the quotes

* _Now your desktop should have a local copy of the cloned repository._

* _To view the webpage, in your terminal, enter the following:_

`_open index.html_`

* _The webpage should simply open in your default web browser._

## Technologies Used

* _JavaScript_

* _jQuery_

* _HTML5_

* _CSS3_

* _Bootstrap_

* _Git_

* _GitHub_

* _README_

### License

Copyright (c) 2018 **_Hassan Al-khalifah_**
