from selenium import webdriver
import time

web=webdriver.Chrome()
web.get('https://testyourlog.in/example/')
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.send_keys('valid@user.com')

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.send_keys('123456')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()
get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfully')
else:
  print('Test was not completed successfully')
  
web.execute_script('window.history.go(-1)')
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()
email.send_keys('valid@user.com')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfullyTest was not completed successfully')
else:
  print('Test completed successfully')
  
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()
email.send_keys('12345')

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.clear()
password.send_keys('1234')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfullyTest was not completed successfully')
else:
  print('Test completed successfully')
  
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.clear()
password.send_keys('123456')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test was not completed successfully')
else:
  print('Test completed successfully')

time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()
email.send_keys('valid@user.com')

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.clear()
password.send_keys('1234')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfullyTest was not completed successfully')
else:
  print('Test completed successfully')
  
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()
email.send_keys('12345')

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.clear()
password.send_keys('123456')

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfullyTest was not completed successfully')
else:
  print('Test completed successfully')
  
time.sleep(2)

email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
email.clear()

password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
password.clear()

button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
button.click()

get_confirmation_div_text = web.find_element_by_css_selector('.content').text
if get_confirmation_div_text == "You're logged in!":
  print('Test completed successfullyTest was not completed successfully')
else:
  print('Test completed successfully')