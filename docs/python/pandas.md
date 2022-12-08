---
title: Pandas cheat sheet
sidebar_position: 30
---

# Pandas cheat sheet 

Pandas is a Python library for working with different data sources. It enables to select and manipulate data, 
and is primarily used for working with CSV files. 

Installing pandas: 

```bash
pip install pandas 
```

Then, we can import it. The standard is to import it as <code>pd</code>. 

## Creating a data frame

A data frame is the basis for everything. The in short, <code>df</code> stores the data within Pandas, for enabling 
us to manipulate the data. 

### Using CSV data 

```python
import pandas as pd 

df = pd.read_csv("homes.csv")

df.head()
```
<code>df.head()</code> prints the column labels and five more rows. It is often used to verify Pandas is working. 

### Using dictionaries 

```python
data = {
    "a": [1, 2, 3], 
    "b": [4, 10, 2], 
    "c": [6, 15, 13]
}
df = pd.DataFrame(data)
````
The provided dictionary generates the following data frame: 

| a | b  | c  |
|---|----|----|
| 1 | 2  | 3  |
| 4 | 10 | 2  |
| 6 | 15 | 13 |
## Selecting data 

### Getting a single column
```python 
df["name"]
```


### Selecting columns in range

```python
df.loc[:,"name":]
```
## Analysing data 
While Pandas is not mainly for plotting and analysing data, it has some capabilites for it. 
For example, we can retrieve information about the distribution of a data column.

```python
name_info = df['name'].value_counts(normalize=True)
```
