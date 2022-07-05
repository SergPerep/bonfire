# Math

Explanation of the math behind gas-burner app.

## Electricity

There 4 types of expenses that you should keep an eye on regarding electricity: 

### Variable costs `variabele kosten`

Money that you pay to energy supplier for electricity that you have used. They are variable since they depend on your consumption.

<details><summary><b>Is your meter box smart?</b></summary>    

<p>There is two types of meter boxes: smart (slim) and not smart. </p>
<p>If your meter box is not smart, it has only one reading – enkel. If your meter box is smart, it has two readings: day readings (normaal), night readings (dal).</p>

</details>


```javascript
// If your meterkast is not slim
const elConsumptieEnkel = 911; // kWh
const elEnkelTotVarKosten = 0.470799; // €/kWh
const elTotVarKostenPerJaar =
    elConsumptieEnkel * elEnkelTotVarKosten;
// RESULT
// Total electricity variable costs for this year are 429€ 
```
```javascript
// If your meterkast is slim

const elConsumptieNormaal = 507; // kWh 
const elConsumptieDal = 402; // kWh

const elNormaalTotVarKosten = 0.490280; // €/kWh
const elDalTotVarKosten = 0.445389; // €/kWh

const elTotVarKostenPerJaar =
    elConsumptieNormaal * elNormaalTotVarKosten +
    elConsumptieDal * elDalTotVarKosten;

// RESULT
// Total electricity variable costs for this year are 428€ 
```

### Fixed costs `vaste kosten`

Fixed amount of money that you pay to energy supplier. They are the same every month and non-dependent on your consumption. Think about them as subscription fee.

```javascript
const elVasteLevKosten = 6.489956; // €/month
const elVasteLevKostenPerJaar = elVasteLevKosten * 12;
// RESULT
// Total electricity fixed costs for this year are 78€
```

### Reduction energy tax `vermindering energiebelasting`

```javascript
const elVerminEnergBelasting = -2.259650; // €/dag
const elVerminEnergBelastingPerJaar = elVerminEnergBelasting * 365;
// RESULT
// Reduction energy tax for this year is -825€
```

### Delivery costs `netbeheerkosten`

Money that you pay to grid operator for energy connection and the transport of energy.

```javascript
const elNetbeheerKosten = 0.696597; // €/dag
const elNetbeheerKostenPerJaar = elNetbeheerKosten * 365;
// RESULT
// Reduction energy tax for this year is 254€
```

