from selenium import webdriver

driver = webdriver.Chrome('\project\pj1\chromedriver')

driver.get("https://www.pecodesoftware.com/qa-portal/greet.php")
UserName = driver.find_element_by_xpath('//*[@id="all"]/div/form/div[1]/input')
Password = driver.find_element_by_xpath('//*[@id="all"]/div/form/div[2]/input')
Login = driver.find_element_by_xpath('//*[@id="all"]/div/form/div[3]/input')

UserName.send_keys('^$&(*')
Password.send_keys('#$&^&')
Login.click()