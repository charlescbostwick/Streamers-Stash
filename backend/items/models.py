# backend/items/models.py
from djongo import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    # more fields later

    def __str__(self):
        return self.name
