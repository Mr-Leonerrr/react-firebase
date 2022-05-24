import React from "react";
import { shallow } from 'enzyme';
import Variables from "../../components/Variables";

describe("Variables", () => {
    test("component have h2 in the greet", () => {
        const greet = "Hello world";
        const wrapper = shallow(<Variables/>);
        const rendered = wrapper.find("h2").text();

        expect(rendered).toBe(greet);
    });

    test("component have image with picsum url", () => {
        const image = "https://picsum.photos/300";
        const wrapper = shallow(<Variables/>);
        const rendered = wrapper.find("#cool-image").prop("src");

        expect(rendered).not.toEqual('');
    });
});