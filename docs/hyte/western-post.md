# Western Post

How to use this 3pl platform

- Website: https://oms.shippingself.com/user/content
- API: https://help.westernfulfill.com/docs/api/api-base-data
- Playback: https://westernpostgroup-my.sharepoint.com/personal/kay_yang_westernpost_group/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkay%5Fyang%5Fwesternpost%5Fgroup%2FDocuments%2FRecordings%2FWestern%20Post%203PL%20OMS%20Training%2D20240730%5F140653%2DMeeting%20Recording%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ed42bb23d%2Dc3ad%2D458a%2D8d63%2D1503d20cce06&ga=1

### How to add product

01 is where we add category, and this is a fixed value.

after 02, the field marked with red is mandatory 

![image-20240831133426405](https://han.blob.core.windows.net/typora/image-20240831133426405.png)

Product attribute 

![image-20240831133608527](https://han.blob.core.windows.net/typora/image-20240831133608527.png) 

Custom code is a field that for different platform, diff names

06:20 recognize we put the cost here! is recommend? and more importantly, what this has to do with insurance. what's involved in `price cost`

![image-20240831133821098](https://han.blob.core.windows.net/typora/image-20240831133821098.png) 

![image-20240831134459860](https://han.blob.core.windows.net/typora/image-20240831134459860.png)

There's a draft mode to create product until clicking `save and submit reviews` 
Explaining the diff between `save` and  `save and submit reviews` 

it's able to create a product in bulk.

![image-20240831134717206](https://han.blob.core.windows.net/typora/image-20240831134717206.png)

use number to feed the data coz it's the only way to recognize the category

John asking hscode at `13:40`. we have hscode on hand but unsure about `import hscode`. 
even though alice said we can leave it blank but we can't. 

All batch upload will be in draft mode. we still can change things before offically upload. remember to submit the draft!

`16:30` : John was asking about the restriction about shipping the product. Once we done uploading product, whether there's a restriction...? is that about the previous `HScode`

Also, there's a 3rd way to create a product, which is from API. [Here](https://help.westernfulfill.com/docs/api/createProduct) is the documentation

### Creating an inbound list

When creating an inbound list for a 3PL (Third-Party Logistics) provider, you're essentially providing them with detailed information about the incoming shipments. This list typically includes specifics about where the products need to go within the 3PL's facilities or to a final destination

![image-20240831135508702](https://han.blob.core.windows.net/typora/image-20240831135508702.png)

i guess for the screenshot above and beneath only john understand.

![image-20240831140036860](https://han.blob.core.windows.net/typora/image-20240831140036860.png) 

The number from our system. with that we dnt need to 

![image-20240831140055597](https://han.blob.core.windows.net/typora/image-20240831140055597.png) 

with `entire container`, there's a dependency dropdown which is `Container type`. i guess only john knows

![image-20240831140345827](https://han.blob.core.windows.net/typora/image-20240831140345827.png)

Unsure about when we should fill `tracking number`

![image-20240831140526176](https://han.blob.core.windows.net/typora/image-20240831140526176.png) 

This lead some confusions

![image-20240831142716238](https://han.blob.core.windows.net/typora/image-20240831142716238.png)

`30:00`

Some Jargon

- Container: A **container** refers to a large, standardized shipping unit used to transport goods, typically by sea, rail, or truck. These containers hold a significant amount of cargo and are essential in the logistics chain for moving products between locations, especially in international shipping.
- **ETA** stands for **Estimated Time of Arrival**. It indicates when the container is expected to arrive at the destination. This helps in planning logistics, such as unloading and storing the goods.
- Offloading from the container

![image-20240831143137968](https://han.blob.core.windows.net/typora/image-20240831143137968.png)

### Shipping order

B2C and FBA

- **FBA** stands for **Fulfillment by Amazon**, which is a service provided by Amazon that allows businesses (sellers) to store their products in Amazon's fulfillment centers. Amazon takes care of the storage, packaging, shipping, customer service, and returns for these products. Sellers send their inventory to Amazon's warehouses, and when a customer orders a product, Amazon handles the entire fulfillment process, including the shipping of the product to the customer.
- We use normal B2C

![image-20240831145153629](https://han.blob.core.windows.net/typora/image-20240831145153629.png)

Choosing `automated warehouse allocation` to let system opt to the cheapest tier

![image-20240831145424608](https://han.blob.core.windows.net/typora/image-20240831145424608.png)

![image-20240831145639999](https://han.blob.core.windows.net/typora/image-20240831145639999.png)

This address validation is just as this

![image-20240831145740764](https://han.blob.core.windows.net/typora/image-20240831145740764.png) 

just provide a suggestion, not helping us to correct the address

`38:00` We have to print our label through 3rd party for intl orders. That 3rd party is remitting our taxes. 
They can help me to look the label. if we only have a handful of intl order, we can notice them manually...

`44:00` ~ `45:00` Do **Western Post** help us detect the dup? No, we need to handle ourselves

### Inventory management

**In Transit**: This status indicates that the inventory is currently being transported from one location to another. The goods are not yet at the warehouse or final destination and are still on their way. It means the items are en route and have not yet been received or processed at the destination.

**Waiting To Be Putaway**: This status means that the inventory has arrived at the warehouse or designated location but has not yet been placed in its proper storage area. The items are typically in a staging area, awaiting further processing, such as being moved to their assigned locations within the warehouse.

**Available For Sale**: This status indicates that the inventory has been processed, stored in its designated area, and is now ready to be sold. The products are available for customers to purchase, and they can be included in orders and shipped out as needed.

![image-20240831151211710](https://han.blob.core.windows.net/typora/image-20240831151211710.png)

### Fee calculation

![image-20240831151601013](https://han.blob.core.windows.net/typora/image-20240831151601013.png)



