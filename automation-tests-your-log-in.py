from selenium import webdriver
import time

web=webdriver.Chrome()

web.get('https://testyourlog.in/example/')

time.sleep(2)

def test1(Email, Password):
    email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
    email.send_keys(Email)
    password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
    password.send_keys(Password)  
    button = web.find_element_by_xpath('/html/body/div/div/form/div[1]/button')
    button.click()
    get_confirmation_div_text = web.find_element_by_css_selector('.content').text
    if get_confirmation_div_text == "You're logged in!":
        print('Test completed successfully')
    else:
        print('Test was not completed successfully')

def test2(Email = None , Password = None):
    
        email = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[1]/div/input')
        email.clear()
        if(Email != None):
            email.send_keys(Email)
     
        password = web.find_element_by_xpath('/html/body/div/div/form/div[1]/div[2]/div/input')
        password.clear()
        if(Password != None): 
            password.send_keys(Password)

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

test2(Email = 'valid@user.com')
test2('12345','1234')
test2(Password = '123456')
test2('valid@user.com','1234')
test2('1234','123456')
test2()

