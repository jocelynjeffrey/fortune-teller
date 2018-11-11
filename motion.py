import json

# import GPIO library
import RPi.GPIO as GPIO

# import time library
import time

#set GPIO pin numbering
GPIO.setmode(GPIO.BOARD)
#associate pin 7 to pir
pir =7
#set pin as GPIO in
GPIO.setup(pir, GPIO.IN)

#import requests library
import requests

#set api endpoint
url = "http://localhost:3000/motion"

print ("Waiting for sensor to settle")
time.sleep(2)                                     #Waiting 2 seconds for the sensor to initiate
print ("Detecting...")
while True:
   if GPIO.input(pir):                            #Check whether pir is HIGH
      print ("Motion Detected!")
      requests.post(url, json={'msg': 1})
      time.sleep(2)                               #D1- Delay to avoid multiple detection
   else:
      print ("waiting for motion")
      requests.post(url, json={'msg': 0})
      time.sleep(2)
#   time.sleep(0.1)                                #While loop delay should be less than detection(hard$
