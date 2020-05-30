import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe ("Profile Status Component", () => {
    test("status from props should be it the state", () => {
        const component = create (<ProfileStatus status="test status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status"); 
    });

    test("after creation span should be displayd", () => {
        const component = create (<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();    
    });

    test("after creation input should not be displayd", () => {
        const component = create (<ProfileStatus status="test status" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();    
    });

    test("input should be displayd in edit mode instead of span", () => {
        const component = create (<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");

        expect(input.props.value).toBe("test status");     
    });

    test("after creation span should contain correct status", () => {
        const component = create (<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test status");    
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create (<ProfileStatus status="test status" updateStatus={mockCallBack} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);    
    });
});