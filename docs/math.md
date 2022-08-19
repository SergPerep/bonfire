# Math

Explanation of the math behind gas-burner app.

## What do you need

To calculate energy expenses you need to have:

- **Annual energy consumption**. For gas and electricity for a year.
- **Rates agreement `Tarieven overeenkomst`**. The document where you can find information about rates and other energy costs that you signed up for. Energy provider should have sent it to you after you have signed up a contract. It may look like this [Coolblue Rates Agreement Example](./coolblue_minder_energie_2021.png).

### Annual energy consumption

Annual energy consumption is basically how much energy (electricity and gas) you spend in a year. You have to figure out numbers yourself. If don't have this data, you can visit [Gemiddeld energieverbruik](https://www.milieucentraal.nl/energie-besparen/inzicht-in-je-energierekening/gemiddeld-energieverbruik/#:~:text=Een%20Nederlands%20huishouden%20verbruikt%20jaarlijks,zijn%20in%202022%20grote%20verschillen.) to find average numbers for a household similar to yours.

For this example I'm going to use my own data for 2021 year.

| Type                             | Consumption per year (2021)   |
| -------------------------------- | ----------------------------- |
| Electricity consumption: Normaal | 507  kWh                      |
| Electricity consumption: Dal     | 402 kWh                       |
| Gas consumption                  | 1200 m³                       |

### Rates agreement `Tarieven overeenkomst`

You receive this document after you sign a contract with energy supplier. You can find it in your emails or in your personal account on website of your energy provider. It might look like this:

![Coolblue_Minder_Energie_2021](./img/coolblue_minder_energie_2021.png)

To calculate **electricity expenses** we going to use values highlighted with **green**. To calculate **gas expenses** we going to use values highlighted with **orange**.

Now we can start calculating.

## ⚡️ Electricity

There 4 types of expenses that you should keep an eye on regarding electricity.

### 1. Electricity variable costs `Totale variabele kosten`

Money that you pay to energy supplier for electricity that you have used. They are called "variable" since they depend on your consumption.

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
// Total electricity variable costs for this year are €429 
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
// Total electricity variable costs for this year are €428 
```

### 2. Electricity fixed costs `Vaste leveringskosten`

Fixed amount of money that you pay to energy supplier. They are the same every month and non-dependent on your consumption. Think about them as subscription fee.

```javascript
const elVasteLevKosten = 6.489956; // €/month
const elVasteLevKostenPerJaar = elVasteLevKosten * 12;
// RESULT
// Total electricity fixed costs for this year are €78
```

### 3. Electricity reduction energy tax `Vermindering energiebelasting`

The government sets energy tax, that makes energy more expensive, to force people to save energy. But for electricity it also provides tax reduction.

The size of tax reduction depends on a year when your contract starts. For 2022 it is € 824,77.
```javascript
const elVerminEnergBelasting = -2.259650; // €/day
const elVerminEnergBelastingPerJaar = elVerminEnergBelasting * 365;
// RESULT
// Reduction energy tax for this year is -€825
```

### 4. Electricity delivery costs `Netbeheerkosten`

Money that you pay to grid operator for connection and transport of electricity.

```javascript
const elNetbeheerKosten = 0.696597; // €/day
const elNetbeheerKostenPerJaar = elNetbeheerKosten * 365;
// RESULT
// Reduction energy tax for this year is €254
```
### Total electricity costs

Add up all costs to get total for a year for electricity.

```javascript
const elKostenPerJaar =
        elTotVarKostenPerJaar +
        elVasteLevKostenPerJaar +
        elVerminEnergBelastingPerJaar +
        elNetbeheerKostenPerJaar;

// RESULT
// Expenses for electricity this year are -€65

// Divide by 12 to get monthly average
const elKostenPerMaand = elKostenPerJaar / 12;

// RESULT
// Monthly average expenses for electricity are -€5.42
```
> Depending on your electricity consumption your total electricity expenses can come out negative thanks to reduction energy tax.
## 🔥 Gas

### 1. Gas variable costs `Totale variabele kosten`

Money that you pay to energy supplier for gas that you actually have used. They are called "variable" since they depend on your consumption.

```javascript
const gasConsumptie = 1200; // m³
const gasTotVarKosten = 1.927312; // €/m³

const gasTotVarKostenPerJaar = 
    gasTotVarKosten * gasConsumptie;

// RESULT
// Total gas variable costs for this year are €2313
```
### 2. Gas fixed costs `Vaste leveringskosten`

Fixed amount of money that you pay to energy supplier for gas. They are the same every month and non-dependent on your consumption. Think about them as a subscription fee.

```javascript
const gasVasteLevKosten = 6.489956; // €/month
const gasVasteLevKostenPerJaar = gasVasteLevKosten * 12;

// RESULT
// Total gas fixed costs for this year are €78
```
### 3. Gas delivery costs `Netbeheerkosten`

Money that you pay to grid operator for connection and transport of gas.

```javascript
const gasNetbeheerKosten = 0.512435; // €/day
const gasNetbeheerKostenPerJaar = gasNetbeheerKosten * 365;

// RESULT
// Total gas delivery costs for this year are €187
```
### Total gas costs

Add up all costs to get total for a year for gas.

```javascript
const gasKostenPerJaar = 
    gasTotVarKostenPerJaar + 
    gasVasteLevKostenPerJaar + 
    gasNetbeheerKostenPerJaar;

// RESULT
// Total gas costs for this year are €5155

const gasKostenPerMaand = gasKostenPerJaar / 12;

// RESULT
// Monthly average expenses for gas are €430
```

## 🏁 Total energy costs

Finally add up total electricity costs and total gas costs and you will get total energy costs.

```javascript
const totaleKostenPerJaar = elKostenPerJaar + gasKostenPerJaar;

// RESULT
// Total energy costs for this year are €5090

const totaleKostenPerMaand = totaleKostenPerJaar / 12;

// RESULT
// Monthly average expenses for energy are €424
```
