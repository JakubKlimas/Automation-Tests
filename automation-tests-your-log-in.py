
from selenium import webdriver
import time

web=webdriver.Chrome()

web.get('https://testyourlog.in/example/')

time.sleep(2)

def test1(x, y):
    email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
    email.send_keys(x)
    password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
    password.send_keys(y)  
    button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
    button.click()
    get_confirmation_div_text = web.find_element_by_css_selector('.content').text
    if get_confirmation_div_text == "You're logged in!":
        print('Test completed successfully')
    else:
        print('Test was not completed successfully')

def test2(x = None , y = None):
    
        email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
        email.clear()
        if(x != None):
            email.send_keys(x)
     
        password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
        password.clear()
        if(y != None): 
            password.send_keys(y)

        button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
        button.click()
        get_confirmation_div_text = web.find_element_by_css_selector('.content').text
        if get_confirmation_div_text == "You're logged in!":
            print('Test was not completed successfully')
        else:
            print('Test completed successfully')
        time.sleep(2)
 
test1('valid@user.com', '123456') 

web.execute_script('window.history.go(-1)') 
time.sleep(2) 

test2(x = 'valid@user.com')
test2('12345','1234')
test2(y = '123456')
test2('valid@user.com','1234')
test2('1234','123456')
test2()

