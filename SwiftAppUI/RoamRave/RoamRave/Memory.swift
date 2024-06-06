//
//  Memory.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import Foundation

struct Memory: Codable, Identifiable {
    let id: String
    let title: String
    let summary: String
    var photos: [String]
}
