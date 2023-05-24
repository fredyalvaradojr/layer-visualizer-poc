/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import {
  defaultHotSpot,
  options,
  buildLayers,
  defaultChoices,
} from "./data/samples";

const getImageHotSpotData = ({ selectedData, name }) => {
  const hotSpotDataItem = selectedData?.reduce((acc, layer) => {
    if (layer?.hotSpots?.[name]) {
      acc = { ...acc, ...layer?.hotSpots?.[name] };
    }

    return acc;
  }, {});

  return hotSpotDataItem;
};

const ImageStitch = ({ selectedData }) => {
  return (
    <>
      {selectedData.map((layer, key) => {
        const layerHotSpotData = layer?.useHotSpot
          ? getImageHotSpotData({ selectedData, name: layer.name })
          : defaultHotSpot;

        if (layer?.name === "color") {
          return (
            <div
              key={layer.name}
              style={{
                zIndex: key,
                position: "relative",
                backgroundColor: layer?.hexColor,
                width: layer?.width,
                height: layer?.height,
                top: layerHotSpotData?.top,
                left: layerHotSpotData?.left,
                mixBlendMode: "multiply",
              }}
            />
          );
        }

        return (
          <Image
            key={layer.imageUrl}
            src={layer.imageUrl}
            width={layer.width}
            height={layer.height}
            alt={layer.name}
            style={{
              zIndex: key,
              top: layerHotSpotData?.top,
              left: layerHotSpotData?.left,
            }}
          />
        );
      })}
    </>
  );
};

export default function Home() {
  const [selectedChoice, setSelectedChoice] = useState(defaultChoices);
  const [selectedData, setSelectedData] = useState(buildLayers(selectedChoice));

  const getActiveChoice = (id, optionType) => {
    if (id === selectedChoice[optionType]) {
      return "active-choice";
    }

    return "";
  };

  const setChoice = (choice, optionType) => {
    const { id } = choice;
    const updatedSelectedChoices = { ...selectedChoice, [optionType]: id };
    setSelectedChoice(updatedSelectedChoices);
    setSelectedData(buildLayers(updatedSelectedChoices));
  };

  const getOptionsByType = (option) => {
    if (option.optionType === "color") {
      return option?.choices?.map((choice) => (
        <li className="choice-list-item" key={choice.title}>
          <button
            className={`choice-button ${getActiveChoice(
              choice.id,
              option.optionType
            )}`}
            onClick={() => setChoice(choice, option.optionType)}
          >
            <span
              className="swatch-choice"
              style={{ backgroundColor: choice.hex }}
            />
          </button>
        </li>
      ));
    }

    return option?.choices?.map((choice) => (
      <li className="choice-list-item" key={choice.title}>
        <button
          className={`choice-button ${getActiveChoice(
            choice.id,
            option.optionType
          )}`}
          onClick={() => setChoice(choice, option.optionType)}
        >
          <img
            className="choice-image"
            src={choice.imageUrl}
            alt={`${choice.title} image`}
          />
          <div className="choice-description">
            <p className="choice-description-text">{choice.title}</p>
          </div>
        </button>
      </li>
    ));
  };

  const getSelectedItemTitle = (option, selected) => {
    const optionData = option?.choices?.find(
      (choice) => choice.id === selected
    );

    const titleToShow = optionData?.title;
    return titleToShow;
  };

  return (
    <div className="grid grid-cols-3 p-10">
      <div className="col-span-2 p-5">
        <div className="main-image">
          <div className="main-image-container">
            <ImageStitch selectedData={selectedData} />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="main-choice-title">Choose Your Options</h2>
        {options.map((option) => (
          <div key={option.key}>
            <h3 className="choice-title">
              {option?.optionTitle}{" "}
              <strong>
                {getSelectedItemTitle(
                  option,
                  selectedChoice[option.optionType]
                )}
              </strong>
            </h3>
            <ul className="choice-list">{getOptionsByType(option)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
