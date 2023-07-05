
Debouncing:

typing slow  = 200ms

typing fast = 30ms

performance:

iphone pro max-14 letter * 1000 = 14000api call
with debouncing = 3 API calls*1000 = 3000Api call




Debouncing with 200ms

if difference between two key stroke is less than 200ms - Not call the api
>200 ms - Make an API call show the result
