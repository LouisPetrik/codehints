---
title: Python Dictionaries
---

# Python Dictionaries

Python dictionaries are data structures which store data in key-value pairs. Dictionaries are mutable, meaning that we can add, change, and remove items after the dictionary has been created. Unlike other data structures like lists, dictionaries keep elements unordered. Let's delve deeper into Python dictionaries.

## Creating a Dictionary

A dictionary in Python is created using curly brackets `{}`. Inside these brackets, the key-value pairs are defined by the colon `:`.

```python
my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
```

In the above code snippet, <code>my_dict</code> is a dictionary that contains three key-value pairs. The keys and values can be of any data type.

## Access Elements

You can access the items of a dictionary by referring to its key name, inside square brackets `[]`.

```python
print(my_dict['key2'])
```

This code will output `'value2'`. The string `key2` is the key that corresponds to the value `'value2'` in the `my_dict` dictionary.

## Alter Elements

You can alter the value of a specific item in a dictionary by referring to its key.

```python
my_dict['key2'] = 'new_value2'
```

After running the code, the value of `key2` has been changed to `'new_value2'`.

## Add Elements

Adding a new element in a dictionary is quite straightforward. You just need to use a new key and assign its value.

```python
my_dict['key4'] = 'value4'
```

This will add a new key-value pair `key4: value4` into the dictionary.

## Loop Over Dictionaries

Iterating through a dictionary gives you the keys. However, you can also access values or key-value pairs while looping.

```python
for key in my_dict:
    print(key, '->', my_dict[key])
```

The code above will print all keys and their corresponding values from the dictionary.

## Default Methods

Python has several built-in methods for dictionaries like <code>get()</code>, <code>items()</code>, <code>values()</code>, <code>update()</code>, <code>keys()</code>, etc.

### get()

The <code>get()</code> method returns the value for the given key, if present in the dictionary.

```python
print(my_dict.get('key1'))
```

This will output `'value1'`, the value of `key1` in the dictionary.

### items()

The <code>items()</code> method returns a list containing a tuple for each key-value pair.

```python
print(my_dict.items())
```

This will output `dict_items([('key1', 'value1'), ('key2', 'new_value2'), ('key3', 'value3'), ('key4', 'value4')])`.

### values()

The <code>values()</code> method returns a list of all the values available in a given dictionary.

```python
print(my_dict.values())
```

This will output `dict_values(['value1', 'new_value2', 'value3', 'value4'])`.

### update()

The <code>update()</code> method inserts the specified items to the dictionary.

```python
my_dict.update({'key5': 'value5'})
```

This code will add a new pair `key5: value5` to the dictionary.

### keys()

The <code>keys()</code> method returns a list containing the dictionary's keys.

```python
print(my_dict.keys())
```

This will output `dict_keys(['key1', 'key2

', 'key3', 'key4', 'key5'])`.

## Dictionaries vs. Sets

While both dictionaries and sets are used to store collections of data, there are key differences. Dictionaries store data in key-value pairs, whereas sets store unordered collection of unique elements. Sets are usually used when the existence of an object in a collection is more important than the order or how many times it occurs. On the other hand, dictionaries are used when you need a logical association between a key:value pair.

```python
my_set = {'value1', 'value2', 'value3', 'value4'}
```

In the above code, `my_set` is a set with four unique values, while `my_dict` in the previous examples is a dictionary with key-value pairs.

Python dictionaries provide an essential way of managing data. They can be used to represent real-world objects, simplify code, and optimize performance. A good understanding of dictionaries, from how they're created to how they can be manipulated, will help you become more proficient in Python, whether it's for data science, web development, or automation. If you're also interested in other Python data structures, you might find our guides on [Python Lists](/python/lists) and [Python Classes](/python/classes) useful. For more complex operations, our guide on [Python Functions](/python/functions) can be a great resource.
