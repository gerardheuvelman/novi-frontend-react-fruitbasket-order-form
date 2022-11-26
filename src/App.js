import { useForm } from 'react-hook-form';
import React, {useState} from 'react';
import './App.css';
import FruitComponent from "./components/FruitComponent/FruitComponent";
import Button from "./components/Button/Button";
import LabelInput from "./components/LabelInput/LabelInput";
import InputComponent from "./components/InputComponent/InputComponent";

function App() {

    const { handleSubmit, formState: { errors }, register, watch } = useForm({
        mode: 'onTouched',
        defaultValues: {
            'found-through': 'advertisement',
            age: 18,
        }
    });

//     Optie 1: houd de waarde van één veld bij
    const watchSelectedReferrer = watch('found-through');
// Optie 2: houd de waarde van meedere velden bij:
//     const watchFields = watch(['found-through', 'naam-ander-veld']);
// Optie 3: houd de waardes van alle velden bij:
//     const watchAllFields = watch();

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        postalcode: '',
        frequency : '',
        timeperiod : '',
        remarks : '',
        conditions: false,
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault(); // pagina wordt niet ververst

        console.log('Order information: ');
        console.log('First name: ',formState.firstname);
        console.log('Last name: ',formState.lastname);
        console.log('Age: ',formState.age);
        console.log('Zip-code: ',formState.postalcode);
        console.log('Time-period: ',formState.timeperiod);
        console.log('Frequency: ',formState.frequency);
        console.log('Remarks: ',formState.remarks);

        console.log('Items ordered: ');
        console.log('Strawberries: ', numStrawberries);
        console.log('Bananas: ' , numBananas);
        console.log('Apples: ', numApples);
        console.log('Kiwis: ', numKiwis);

    }

    function handleHookFormSubmit(data) {
        console.log('DATA:', data);

    }


    const [ numStrawberries, setNumStrawberries ] = useState(0)
    const [ numBananas, setNumBananas ] = useState(0)
    const [ numApples, setNumApples ] = useState(0)
    const [ numKiwis, setNumKiwis ] = useState(0)

    function decreaseNum(numFruit, setFruit) {
        if (numFruit > 0 ){
            setFruit(numFruit => numFruit - 1);
        }
    }

    function increaseNum(numFruit, setFruit) {
        if (numFruit < 10 ){
            setFruit(numFruit => numFruit + 1);
        }
    }

    function resetFruitCounts() {
        setNumStrawberries(numStrawberries => 0);
        setNumBananas(0);
        setNumApples(0);
        setNumKiwis(0);
    }

    console.log('ERRORS: ', errors);
    return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div>
            <FruitComponent
                numFruit={numStrawberries}
                minFunction={() => decreaseNum(numStrawberries, setNumStrawberries)}
                plusFunction={()=> increaseNum(numStrawberries, setNumStrawberries)}
            >🍓 Aardbeien
            </FruitComponent>
            <br/>
            <FruitComponent
                numFruit={numBananas}
                minFunction={() => decreaseNum(numBananas, setNumBananas)}
                plusFunction={() => increaseNum(numBananas,setNumBananas)}
            >🍌 Bananen
            </FruitComponent>
            <br/>
            <FruitComponent
                numFruit={numApples}
                minFunction={() => decreaseNum(numApples, setNumApples)}
                plusFunction={() => increaseNum(numApples,setNumApples)}
            >🍎 Appels
            </FruitComponent>
            <br/>
            <FruitComponent
                numFruit={numKiwis}
                minFunction={() => decreaseNum(numKiwis, setNumKiwis)}
                plusFunction={() => increaseNum(numKiwis, setNumKiwis)}
            > 🥝 Kiwis
            </FruitComponent>
            <br/>
            <Button
                type="button"
                clickHandler={() => resetFruitCounts()}
            >
                RESET
            </Button>
        </div>
        <br/>

        <form onSubmit={handleFormSubmit}>
            <LabelInput
                type="text"
                id="form-first-name"
                name="firstname"
                value={formState.firstname}
                onChange={handleChange}
            >
                Voornaam
            </LabelInput>
            <LabelInput
                type="text"
                id="form-last-name"
                name="lastname"
                value={formState.lastname}
                onChange={handleChange}
            >
                Achternaam
            </LabelInput>
            <LabelInput
                type="text"
                id="form-age"
                name="age"
                value={formState.age}
                onChange={handleChange}
            >
                Leeftijd
            </LabelInput>
            <LabelInput
                type="text"
                id="form-postal-code"
                name="postalcode"
                value={formState.postalcode}
                onChange={handleChange}
            >
                Postcode
            </LabelInput>
            <label htmlFor="form-frequency">
                <select
                    id="form-frequency"
                    name="frequency"
                    value={formState.frequency}
                    onChange={handleChange}
                >
                    <option value="kies" >Kies een optie</option>
                    <option value="week">Iedere week</option>
                    <option value="week">Om de week</option>
                    <option value="maand">Iedere maand</option>
                </select>
            </label>
            <br/>
            <label htmlFor="form-overdag">
            <input
                type="radio"
                id="form-overdag"
                name="timeperiod"
                value={formState.timeperiod}
                onChange={handleChange}
            />
            Overdag</label>
            <label htmlFor="form-savonds">
            <input
                type="radio"
                id="form-savonds"
                name="timeperiod"
                value={formState.timeperiod}
                onChange={handleChange}
            />
            's Avonds</label>
            <br/>
            <label htmlFor="form-remarks">Opmerking</label>
            <br/>
            <textarea
                id="form-remarks"
                name="remarks"
                rows="4"
                cols="50"
                value={formState.remarks}
                onChange={handleChange}
            ></textarea>
            <br/>
            <label htmlFor="form-conditions" >
            <input type="checkbox"
                   id="form-conditions"
                   name="conditions"
                   checked={formState.conditions}
                   onChange={handleChange}
            />Ik ga akkoord met de voorwaarden
            </label>
            <br/>
            <Button
                type="submit"
            >
                Verzend
            </Button>
        </form>

        <br/>
        {/*REACT HOOK FORM TEST*/}

        <p>REACT HOOK FORM (BUITEN DE OPDRACHT)</p>
        <form onSubmit={handleSubmit(handleHookFormSubmit)}>
            <InputComponent
                inputType="text"
                inputName="name"
                inputId="name-field"
                inputLabel="Naam: "
                placeholder="Typ je naam"
                validationRules={{
                    required: {
                        value: true,
                        message: 'Naam is verplicht',
                    }
                }}
                register={register}
                errors={errors}
            />
            <InputComponent
                inputType="text"
                inputName="email1"
                inputId="email-validate-field"
                placeholder="Typ je email-adres"
                inputLabel="Email(1/2): "
                validationRules={{
                    required: true,
                    message: 'Dit veld is verplicht',
                    validate: (value) => value.includes('@') || 'Email moet een @ bevatten',
                }}
                register={register}
                errors={errors}
            />
            <InputComponent
                inputType="text"
                inputName="email2"
                inputId="email-pattern-field"
                placeholder="Herhaal je email-adres"
                inputLabel="Email(2/2): "
                validationRules={{
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                }}
                register={register}
                errors={errors}
            />

            <InputComponent
                inputType="text"
                inputName="age"
                inputId="age-field"
                placeholder="Typ je leeftijd"
                inputLabel="Leeftijd: "
                validationRules={{
                    required: true,
                    min: {
                        value: 18,
                        message: "De minimum leeftijd is 18 jaar"
                    },
                    max: {
                        value: 88,
                        message: "Je mag niet ouder zijn dan 88"
                    }
                }}
                register={register}
                errors={errors}
            />

            <label htmlFor="message-field">
                Message:
                <br/>
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Laat je bericht achter"
                    {...register("message-content", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                        minLength: {
                            value: 10,
                            message: 'Input moet minstens 10 karakters bevatten',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Input mag maximaal 50 karakters bevatten',
                        },
                    })
                    }
                ></textarea>
                {errors['message-content'] && <p><br/>{errors['message-content'].message}</p>}
            </label>
            <br/>
            <label htmlFor="referrer">
                Hoe heb je ons gevonden?
                <select id="referrer" {...register("found-through")}>
                    <option value="google">Google</option>
                    <option value="friend">Vriend</option>
                    <option value="advertisement">Advertentie</option>
                    <option value="other">Anders</option>
                </select>
            </label>
            <br/>
            {watchSelectedReferrer === "other" &&
                <InputComponent
                    inputType="text"
                    inputName="found-through-anders"
                    inputId="name-field"
                    inputLabel="Toelichting: "
                    placeholder="typ hier een eventuele toelichting"
                    validationRules={{
                        required: {
                            value: false,
                            message: 'Dit veld is niet verplicht',
                        }
                    }}
                    register={register}
                    errors={errors}
                />}
                <Button
                type="submit"
            >
                SUBMIT THROUGH REACT HOOK FORM
            </Button>
        </form>
    </>
  );
}

export default App;

