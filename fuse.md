---
layout: fuse                        
---


## Integration

### Add qlack-fuse-aaa-annotations dependency to your pom.xml:

```
    <properties>
        <!-- ... -->
        <version.qlack>3.0.0-SNAPSHOT</version.qlack>
    </properties>
    <dependency>
        <groupId>com.eurodyn.qlack.fuse</groupId>
        <artifactId>qlack-fuse-aaa-annotations</artifactId>
        <version>${version.qlack}</version>
    </dependency>
```
### Example 2
```java
RequestMapping(method = RequestMethod.PUT, value="/app/docs")
@ResourceAccess(
    operations = {
            @ResourceOperation(operation = "UPDATE_PERMISSION", 
            resourceIdField = "id")
    }
 )
```




